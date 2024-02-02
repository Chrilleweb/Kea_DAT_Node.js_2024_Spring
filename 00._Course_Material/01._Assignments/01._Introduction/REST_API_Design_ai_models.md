## REST API Design

Design a REST API based on a topic we choose in class. The topic is:


aimodels

 
Note that you are to design and document a potential REST API that is CRUDable based on this topic. NOT implement it. 

You can use any format/structure you like (feel free to be creative) and it can be handed in as a spreadsheet, txt, markdown, image, xml, diagram or whatever. 
I recommend that you do it differently from how we did it in class to enforce your understanding of the three conventions. 
Knowing them and using them is a core tenet of this course. 
 

The point of the exercise is that you understand the three conventions we have talked about: 

1. Using the right HTTP method for the action. 
2. The ordering of the HTTP methods. 
3. The standardization of the endpoints which should reflect the underlying collections in your system. 

# AI Models REST API Design

## 1. Collection Resource: `/aimodels`

### 1.1 GET - Retrieve All AI Models
- Endpoint: `/aimodels`
- Description: Get a list of all AI models.
- Response: `200 OK`

### 1.2 POST - Create a New AI Model
- Endpoint: `/aimodels`
- Description: Create a new AI model.
- Request Body: JSON representation of the AI model.
- Response: 
  - `201 Created` with the newly created AI model.
  - `400 Bad Request` if the request body is invalid.

## 2. Singular Resource: `/aimodels/{model_id}`

### 2.1 GET - Retrieve a Specific AI Model
- Endpoint: `/aimodels/{model_id}`
- Description: Get details of a specific AI model.
- Response: 
  - `200 OK` with the AI model details.
  - `404 Not Found` if the AI model with the given ID doesn't exist.

### 2.2 PUT - Update a Specific AI Model
- Endpoint: `/aimodels/{model_id}`
- Description: Update the details of a specific AI model.
- Request Body: JSON representation of the updated AI model.
- Response: 
  - `200 OK` with the updated AI model details.
  - `400 Bad Request` if the request body is invalid.
  - `404 Not Found` if the AI model with the given ID doesn't exist.

### 2.3 DELETE - Delete a Specific AI Model
- Endpoint: `/aimodels/{model_id}`
- Description: Delete a specific AI model.
- Response: 
  - `204 No Content` if the deletion is successful.
  - `404 Not Found` if the AI model with the given ID doesn't exist.

## 3. Action Endpoint: `/aimodels/{model_id}/deploy`

### 3.1 POST - Deploy an AI Model
- Endpoint: `/aimodels/{model_id}/deploy`
- Description: Deploy a specific AI model.
- Response:
  - `200 OK` if deployment is successful.
  - `404 Not Found` if the AI model with the given ID doesn't exist.

## 4. Action Endpoint: `/aimodels/{model_id}/undeploy`

### 4.1 POST - Undeploy an AI Model
- Endpoint: `/aimodels/{model_id}/undeploy`
- Description: Undeploy a specific AI model.
- Response:
  - `200 OK` if undeployment is successful.
  - `404 Not Found` if the AI model with the given ID doesn't exist.


