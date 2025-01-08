# Notes App

A simple, elegant notes application built with HTML, Bootstrap, and JavaScript. This app allows users to create, search, and delete notes with persistent storage using crudcrud.com API.

## 🚀 Features

- Create notes with title and description
- Real-time search functionality by note title
- Delete notes
- Persistent storage using crudcrud.com API
- Responsive design using Bootstrap 5
- Clean and intuitive user interface

## 🛠️ Technologies Used

- HTML5
- Bootstrap 5
- JavaScript (ES6+)
- Axios for API requests
- crudcrud.com for backend storage

## 📥 Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/notes-app.git
```

2. Navigate to the project directory:

```bash
cd notes-app
```

3. Open `index.html` in your web browser.

## 💻 Usage

1. **Adding a Note**

   - Fill in the note title and description in the form
   - Click "Add Note" button to save the note

2. **Searching Notes**

   - Type in the search bar to filter notes by title
   - Search works in real-time as you type

3. **Deleting a Note**
   - Click the "Delete" button on any note card to remove it
   - Note will be deleted from both UI and database

## 🔌 API Configuration

The app uses crudcrud.com for data storage. The current endpoint is:

```
https://crudcrud.com/api/40bf10247e5348f8819d720979cba00b/notes
```

⚠️ **Note**: The crudcrud.com API endpoint expires after 24 hours. You'll need to:

1. Get a new API endpoint from [crudcrud.com](https://crudcrud.com)
2. Replace the `API_URL` in the JavaScript code with your new endpoint

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## 🎉 Acknowledgments

- Bootstrap for the awesome UI components
- Axios for simplified HTTP requests
- crudcrud.com for providing a simple backend solution

## 📧 Contact

Your Name - [@Kanishk_777](https://twitter.com/Kanishk_777)

Project Link: [https://github.com/kanishk44/notes-app](https://github.com/kanishk44/notes-app)
