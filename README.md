# API Documentation

## Tecnologías Utilizadas

- Node.js / Express 
- Docker
- Clean Architecture
- Google Cloud Platform

## APIs Desplegadas
- [QR Factorization](https://qr-metrics-calculator-qr-736264852423.us-central1.run.app/api/qr-factorization)
- [QR Metrics](https://qr-metrics-calculator-736264852423.us-central1.run.app/api/matrix-metrics)

## Instalación y Configuración

### Prerrequisitos

Asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)

### Clonar el Repositorio
```sh
 git clone https://github.com/RenzoReccio/qr-metrics-calculator
```
### Construcción y Ejecución
#### Ejecutar con Docker
```sh
docker-compose up --build
```

#### Acceder a Endpoints Localmente
```sh
curl -X POST http://localhost:3002/api/qr-factorization \
     -H "Content-Type: application/json" \
     -d '{
       "matrix": [
         [1, 2],
         [3, 4]
       ]
     }'
```

```sh
curl -X POST http://localhost:3001/api/matrix-metrics \
     -H "Content-Type: application/json" \
     -d '{
       "Q": [
         [0.31622776601683794, 0.9486832980505138],
         [0.9486832980505138, -0.3162277660168383]
       ],
       "R": [
         [3.1622776601683795, 4.427188724235731],
         [0, 0.6324555320336758]
       ]
     }'
```

## Ejecutar Test
```sh
cd metrics-service
npm test

cd qr-service
npm test
```

## Uso

Puedes acceder a los endpoints del servicio con Postman o cURL. Ejemplo de solicitud:
```sh
curl -X POST https://qr-metrics-calculator-qr-736264852423.us-central1.run.app/api/qr-factorization \
     -H "Content-Type: application/json" \
     -d '{
       "matrix": [
         [1, 2],
         [3, 4]
       ]
     }'
```

```sh
curl -X POST https://qr-metrics-calculator-736264852423.us-central1.run.app/api/matrix-metrics \
     -H "Content-Type: application/json" \
     -d '{
       "Q": [
         [0.31622776601683794, 0.9486832980505138],
         [0.9486832980505138, -0.3162277660168383]
       ],
       "R": [
         [3.1622776601683795, 4.427188724235731],
         [0, 0.6324555320336758]
       ]
     }'
```
