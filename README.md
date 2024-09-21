# Link2QR Converter

Link2QR Converter is a React-based application that allows users to convert any link into a QR code. The app is built with a simple and minimal design, utilizing **Tailwind CSS** for responsive styling and easy customization. Additionally, it allows users to download the generated QR code, with the filename matching the website name for easy identification.

<img src="./src/assets/qr code converter.PNG">

## Features

- **Simple and Minimal UI**: The design focuses on a clean, minimalistic approach, making it easy for users to generate QR codes without distractions.
- **QR Code Download**: The app generates and allows users to download the QR code as a PNG file, with the filename automatically set to the website's name for recognition.
- **Responsive Design**: Thanks to Tailwind CSS, the app is fully responsive and works well on various screen sizes.
- **Fast and Efficient**: Built with React and optimized libraries, the app is fast and responsive for an optimal user experience.

## Installation and Setup

Follow the instructions below to run the project on your local machine.

### Prerequisites

Ensure that you have the following tools installed on your system:
- **Node.js** (v14 or higher)
- **npm** (Node Package Manager)

### Steps to Set Up

1. **Clone the repository**  
   Open your terminal and clone the repository using the following command:
   ```bash
   git clone https://github.com/YashodharChavan/Link-to-QR-code.git
   ```

2. **Install dependencies**
    Navigate to the project directory and install the necessary packages:
    ```bash
    npm i
    ```
3. **Install Tailwind CSS**
    Add Tailwind CSS to the project:
    ```bash
    npm install -D tailwindcss
    ```
    Initialize Tailwind CSS by creating a `tailwind.config.js` file:
    ```bash
    npx tailwindcss init -p
    ```
    Modify the `tailwind.config.js` to add the paths to your content files. For example:

```javascript
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

4. **Install Additional Libraries**
    ```bash
    npm i react-hook-form react-qr-code html2canvas autoprefixer
    ```
5. **Run the Development Server**
    Start the development server to run the app:
    ```bash
    npm run dev
    ```


## Attributions

This project makes use of resources from the following:

- **Icons**: Icons used in the project are sourced from [Flaticon](https://www.flaticon.com). Be sure to review and adhere to their usage guidelines and licensing terms.
- **AI Assistance**: Portions of this README and other aspects of the project were generated with the help of [ChatGPT](https://chat.openai.com), an AI language model by OpenAI.


## Usage

1. **Generate QR Code**:  
   After launching the app, enter the URL/link you want to convert into a QR code. The app will automatically generate a QR code for the link.

2. **Download QR Code**:  
   Once the QR code is generated, you will see a download button. Clicking on it will save the QR code as a PNG file with the name same as the website in the link (e.g., `youtube-QR.png`).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please reach out:

- **Email**: [yashodhar.vgency@gmail.com](mailto:yashodhar.vgency@gmail.com)
- **GitHub**: [YashodharChavan](https://github.com/YashodharChavan)
