my-app/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   └── routes/
│   ├── .index.ts
│   ├── .types.d.ts
│   ├── .env
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── icons/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── toast/
│   │   └── App.tsx
│   ├── .env
│   ├── package.json
│   └── README.md
│
└── README.md


Approach
Login Page Implementation:

I created a simple login form using HTML and CSS, with fields for username and password.
I used a backend framework  Node.js with Express for handling authentication. 
To securely handle user credentials, I implemented hash-based password storage and validation using library bcrypt.
 Implement JWT for secure authentication.
Ensure routes are protected and accessible only to authenticated users.
User Experience Enhancements: By using Redux, the application can provide real-time updates to the UI based on the authentication state, ensuring that users see the correct information and feedback immediately.
Blog Listing Page:

Developed an API endpoint that retrieves all blog posts from a database MongoDB.
The front end queries this API and displays the list of blogs in a structured format, including titles, snippets and options to edit  them.
Implemented pagination for better usability if there are many blogs.
Blog Edit Page with Locking Mechanism:

Created an edit page that fetches the specific blog based on its ID.
Introduced a locking mechanism using a flag in the database isLocked, lockedBy,lockedAt  attribute. When a user enters the edit page, the flag is set to true, indicating the blog is currently being edited by that user.
Used session or temporary tokens to associate the lock with the current user, allowing them to edit the blog.
Handling Concurrent Edits:

Added logic to check if the blog is already locked when a user tries to access the edit page. If it is, a message is displayed informing the user that the blog is currently being edited by someone else.
Challenges Faced
Authentication Security:

Ensuring secure authentication methods and safe storage of passwords was challenging. I overcame this by using established libraries for hashing passwords and implementing session management carefully.
Database Locking Mechanism:

Designing the locking mechanism to handle multiple users accessing the blog concurrently posed an issue. I resolved this by integrating database transactions and conditional updates to ensure that locks are released properly and only when necessary.
User Experience with Locking:

Ensuring that users received clear and immediate feedback when attempting to edit a locked blog was crucial.
Conclusion
Throughout the project, a focus on user experience, secure authentication, and efficient data handling was paramount. Emphasizing clear communication between the frontend and backend allowed me to create a seamless and secure blogging platform that meets user needs while addressing potential challenges.
