import React, { useContext, useRef, useEffect } from "react";
import { Map, TileLayer, Marker, Popup, CircleMarker } from "react-leaflet";
import LocateControl from './LocateControl';
import { Button } from 'react-bootstrap';

import AlertContext from "../../context/alert/AlertContext";
import MyModal from '../form/MyModal';
import ModalContext from "../../context/modal/ModalContext";

const MyMap = props => {

  //Obtener el state de Alerta
  const AlertsContext = useContext(AlertContext);
  const { marker, showCircle, alerts, isBeingDragged, AddMarker, UpdateMarker } = AlertsContext;
  
  //Obtener el state de modal
  const ModalsContext = useContext(ModalContext);
  const { ShowModal } = ModalsContext;

  const refMarker = useRef(null);
  const refCircle = useRef(null);
  //Mostrar el popup cuando se crea marker
  //Mostrar el popup cuando se crea circle
  useEffect(() => {
    if (isBeingDragged) {
      refMarker.current.leafletElement.openPopup();
    }
    if (showCircle) refCircle.current.leafletElement.openPopup();
  }, [showCircle, isBeingDragged]);

  //Funcion para alistar la actualizacion de marker
  const ChangeMarker = ( markerId ) => {
        
    const {lat, lng} = refMarker.current.leafletElement.getLatLng();
    
    const newMarker = {
      id: markerId,
      position: [lat, lng]
    }
    
    //Realizar la actualizacion
    UpdateMarker( newMarker );
  }
  
  const locateOptions = {
    position: 'topright',
    strings: {
        title: 'Mostrar mi ubicación'
    },
    onActivate: () => {} // callback before engine starts retrieving locations
  }
  
  return (
    <Map center={props.center} zoom={props.zoom} onClick={event => AddMarker(event.latlng.lat, event.latlng.lng)}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <LocateControl options={locateOptions} startDirectly/>
      {isBeingDragged? (
          <Marker 
              position={marker.position} 
              name={marker.id} 
              key={marker.id} 
              draggable 
              ref={refMarker} 
              onDragEnd={() => ChangeMarker(marker.id)} 
          >
            <Popup 
              position={marker.position}
            >
              <div className="popup">
                <p>Posicione el marcador exactamente<br/>
                   donde se encuentra la vivienda<br/> 
                   Luego pulse este botón
                </p>
                <div className="btn-popup">
                  <Button variant="success" onClick={ShowModal}>Llenar formulario</Button>
                </div>
                <MyModal/>
              </div>
            </Popup>
          </Marker>
      ): null}
      { alerts.map( alert => 
          <CircleMarker 
            key = {alert.id}
            center={alert.position}
            color="red"
            radius={8}
            ref={refCircle} 
          >
              <Popup>
                Nombre: Juan Perez <br />
                Direccion: Av Angamos 728 <br/>
                Celular: 9999999<br/>
                <Button variant="danger" onClick={ShowModal}>Valido su situación</Button>
                <Button variant="warning" onClick={ShowModal}>Apoyé a esta familia</Button>
              </Popup>
          </CircleMarker>
        )
      }
    </Map>
  );
}

export default MyMap;
