README.md

I did not have any experience with the track chosen nor did I know the frameworks used in making this application. I studied from the book 'Mean Machine - The Beginner's Guide to the JavaScript Stack' by Chris Sevilleja and Holly Lloyd. I received some boiler plate code from the book.

Problem:
Creating a service that allows an individual to indicate interest in solar panels. 

Solution:
I have created a RESTful API for the backend of my webapp. Solution is more focused on back-end but I have also included a front end page. I used Node JS as I had the book Mean Machine and the book provided a valuable resource for any queries. 



Architecture:
    1. In user.js, all the required fields are stored.
    2. server.js contains the API for the application.
        2.1 /users GET - GET requests to the API to retreive the necessary data from the database. The data to return is handled by routing.
        2.2 /users POST - POST requests handle new data from the user. When this occurs the application saves the info as a model. This model is then saved to a MongoDB database. This would happen when the submit button is clicked on the frontend. 
        2.3 /users/:user_id GET - This allows the administrator to retrieve the data of a specific user. The search is conducted on the basis of the user's name.
        2.4 /users/:user_id DELETE - This allows the administrator to delete the data of a specific user. The user is found in the database by the user's name.

If I had more time I would
    1. Link frontend to backend
    2. Create a response page when a form is submitted
    3. Added more functionalities such as search by different parameters
