# Dashboard CTO

Dashboard para visualización de métricas de Jira para seguimiento de equipos de desarrollo.

## Características

- Visualización de tickets de Jira por estado, tipo y prioridad
- Filtros por rango de tiempo (última semana, último mes, etc.)
- Métricas por equipo de desarrollo
- Tiempo de resolución promedio
- Gráficos interactivos

## Estructura del proyecto

```
dashboard-cto/
│   dashboard.html     # Interfaz principal del dashboard
│   dashboard.js       # Script puente para compatibilidad
│
├── js/
│   ├── app.js             # Aplicación principal
│   ├── chartManager.js    # Gestión de gráficos
│   ├── dataAccess.js      # Interfaz para acceder a datos
│   ├── dataManager.js     # Gestión de datos
│   ├── dataStore.js       # Almacén central de datos
│   ├── filterManager.js   # Gestión de filtros
│   ├── tableController.js # Control de tablas
│   ├── uiManager.js       # Gestión de interfaz
│   └── utils.js           # Utilidades compartidas
│
└── examples/
    └── data-example.csv   # Ejemplo de formato de datos
```

## Requisitos

- Navegador web moderno con soporte para JavaScript ES6+
- Archivos CSV con datos de tickets de Jira

## Instalación

1. Clona este repositorio
2. Coloca tu archivo de datos como `data.csv` en la raíz del proyecto
3. Abre `dashboard.html` en un servidor web (debido a restricciones CORS)

## Formato del archivo CSV

El dashboard espera un archivo CSV con al menos las siguientes columnas:
- IssueKey: Identificador del ticket
- Tipo: Tipo de ticket (Bug, Task, Story, etc.)
- Estado: Estado actual (New, In Progress, Done, etc.)
- Prioridad: Nivel de prioridad
- Creado: Fecha de creación
- Resuelto: Fecha de resolución (opcional)
- Resumen: Descripción breve del ticket (debe incluir el código de equipo entre corchetes, ej: [TEAM])

## Licencia

[MIT](LICENSE)
