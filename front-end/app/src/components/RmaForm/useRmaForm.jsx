import React, { useState } from "react"; // Añade la importación de useState
import { useForm } from "react-hook-form";
import {
  createRma,
  getRmaById,
  updateRma,
  deleteRma,

} from "../../api/rmas.api";
import { getListaDeTecnicos } from "../../api/technicians.api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

export function useRmaForm() {
  //Register se utiliza para registrar los campos del formulario

  /*handleSubmit se encarga de manejar la lógica de envío del formulario. se encargará de validar los campos según las reglas de validación definidas en register
    y luego ejecutar la función de envío si la validación es exitosa.*/

  //formstate Este objeto proporciona información sobre el estado del formulario, como si hay errores de validación en los campos del formulario

  //con useform() inicializas las configuraciones del formulario y las funciones que quieres que se utilizen

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const params = useParams();
  const informeId = params.id; // Obtiene el informeId de los parámetros de la URL

  // Define un estado local para almacenar los datos del informe
  const [informe, setInforme] = useState({
    client_name: "", // Inicializa con valores por defecto
    device_model: "",
    imei: "",
    reason: "",
    status: "",
    resolution: "",
    assigned_technician:"",
    assigned_date: "",
  });
  // Crea un estado para obtener la lista de tecnicos
  const [listaDeTecnicos, setListaDeTecnicos] = useState([]);

  const [selectedTechnician, setSelectedTechnician] = useState("");
  const handleTechnicianChange = (event) => {
    const technicianId = event.target.value;
    console.log("Technician ID:", technicianId);

    const selectedTechnician = listaDeTecnicos.find((tecnico) => tecnico.id === +technicianId);
    console.log("Selected Technician:", selectedTechnician);

    setValue("assigned_technician", selectedTechnician ? selectedTechnician.id : "");
    setSelectedTechnician(selectedTechnician);
    handleInputChange(event);
};
  // Función para cargar los datos del informe si estamos en modo de edición
  const cargarDatosDelInforme = () => {
    if (informeId) {
      getRmaById(informeId)
        .then((response) => {
          const informeData = response.data;
      
          // Llena los campos del formulario con los datos del informe
        Object.keys(informeData).forEach((key) => {
          if (key === 'assigned_technician') {
            setSelectedTechnician(informeData[key]);
          } else if (key === 'assigned_date') {
            // Asegúrate de que la fecha esté en el formato correcto (YYYY-MM-DD)
            const fechaFormateada = new Date(informeData[key]).toISOString().split('T')[0];
            setValue(key, fechaFormateada);
          } else {
            setValue(key, informeData[key]);
          }
        });
      })
        .catch((error) => {
          console.error("Error al obtener los detalles del informe:", error);
        });
    }
  };

  useEffect(() => {
    // Carga los datos del informe si estamos en modo de edición
    cargarDatosDelInforme();

    // Obtiene la lista de tecnicos 
    getListaDeTecnicos()
    .then((response) => {
      setListaDeTecnicos(response.data);
    })
    .catch((error) => {
      console.error("Error al obtener la lista de técnicos:", error);
    });
  }, [informeId]);

  //Cuando se ejecuta onsubmit podemos ver los datos por consola
  const onSubmit = handleSubmit(async (data) => {
    // Verifica que selectedTechnician sea un objeto con la propiedad 'id'
    if (selectedTechnician && selectedTechnician.id) {
      // Agrega solo el ID del técnico seleccionado a los datos del formulario
      data.assigned_technician = { id: selectedTechnician.id };
      
      console.log("data", data);
  
      try {
        const isConfirmed = window.confirm(
          "¿Estás seguro de que deseas Crear o Actualizar este informe RMA?"
        );
  
        if (isConfirmed) {
          if (informeId) {
            // Si tenemos un informeId, estamos en modo de edición
            await updateRma(informeId, data);
            console.log("su informe:" , data)

            toast.success("Tarea actualizada", {
              position: "bottom-right",
              style: {
                background: "#101010",
                color: "#fff",
              },
            });
          } else {
            // Si no tenemos un informeId, estamos en modo de creación
            await createRma(data);
            toast.success("Tarea creada", {
              position: "bottom-right",
              style: {
                background: "#101010",
                color: "#fff",
              },
            });
          }
          navigate("/reportes");
        } else {
          // Manejar la lógica de cancelación aquí
          console.log("Creación o actualización cancelada");
        }
      } catch (error) {
        console.error("Error al crear o actualizar el informe RMA", error);
        if (error.response) {
          console.error("Response del servidor:", error.response.data);
        }
      }
    } else {
      console.error("Técnico no seleccionado o sin ID");
    }
  });
  //Funcion para capturar lo que escribe el usuario cuando edita
  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    setValue(name, value);  // Actualiza el valor del campo en el formulario
    setInforme({
      ...informe,
      [name]: value,
      
    });
  
  };

  // Función para eliminar el informe
  const handleDelete = async () => {
    try {
      const isConfirmed = window.confirm(
        "¿Estás seguro de que deseas eliminar este informe RMA?"
      );
      if (isConfirmed) {
        if (informeId) {
          await deleteRma(informeId);
          navigate("/reportes");
          toast.success("Tarea eliminada", {
            position: "bottom-right",
            style: {
              background: "#f5273c",
              color: "#fff",
            },
          });
        }
      }
    } catch (error) {
      console.error("Error al eliminar el informe RMA", error);
    }
  };

  return {
    informe,
    informeId,
    register,
    handleSubmit,
    errors,
    onSubmit,
    handleInputChange,
    handleDelete,
    listaDeTecnicos,
    setValue,
    setInforme,
    handleTechnicianChange,
    selectedTechnician,
    
  };
}
