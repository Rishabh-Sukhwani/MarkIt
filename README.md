# MarkIt

![Demo gif](https://github.com/Rishabh-Sukhwani/MarkIt/blob/main/images/animation.gif?raw=true)

MarkIt is a realtime markdown editor built using NodeJS, SocketIO and ShowdownJS.

## Installation

1. Clone the repository to your local machine using the following command:

```bash
git clone https://github.com/Rishabh-Sukhwani/MarkIt.git
```

2. Navigate to the project directory using the terminal

3. Run the following command to install the required dependencies:

```bash
npm install
```

4. Run the following command to start the server:

```bash
node app.js
```

5. The site is hosted locally on port 3000. Navigate to it and try it out!

## Working

1. In the editor, you can enter Markdown text into the input text area.

2. The Markdown text is parsed and converted to HTML on the server side using the run function in services/parse.js.

3. The converted HTML is sent back to the client side via a WebSocket connection.

4. The client side updates the output area with the converted HTML and displays it to the user.

## Contributing

Contributions to this project are welcome. If you encounter any bugs or issues, please feel free to create an issue on the project's GitHub page. If you would like to contribute code, please fork the repository and submit a pull request.