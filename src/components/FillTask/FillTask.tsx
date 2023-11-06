import { useEffect, useState } from 'react';
import { TaskService } from '../../services/TaskService'; // Asegúrate de importar las funciones adecuadas de tu archivo de servicios
import { Task } from '../../types/Task';
import { Link } from 'react-router-dom';

const FillTask = () => {

  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const tasksData = await TaskService.getAllTasks();
      console.log(tasksData); // Verifica los datos en la consola
      setTasks(tasksData);
    };

    fetchTasks();
  }, []);



  return (
    <div className="container">
      {tasks.map((task) => (
        <div className="col" key={task.id}>
          <div className="card h-100">
            <img
              style={{
                minHeight: '300px',
                maxHeight: '300px',
              }}
              className="card-img-top"
              src={task.imagen}
              alt={task.titulo}
            />
            <div className="card-body p-4">
              <div className="text-center">
                <h5 className="fw-bolder">{task.titulo}</h5>
                <span>{`Tiempo: ${task.tiempo}`}</span> <br />
                <span>{`Responsable: ${task.responsable}`}</span>
              </div>
            </div>
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div className="text-center d-flex gap-1 align-items-center justify-content-center">

              <Link to={`/detalle/${task.id}`} className="btn btn-outline-secondary mt-auto">
                Ver más
              </Link>
              
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FillTask;
