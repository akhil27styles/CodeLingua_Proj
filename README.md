# codeLingua


Codelingua is a web-based code translator that allows you to convert your code from one programming language to another. And also it help to migrate from old version of code to new version
It uses OpenAI's GPT-3 language model to perform the translations.


![code translator](https://i.postimg.cc/XNgH7CyG/pp.png)
![code Migration](https://i.postimg.cc/J72sVT4p/image2.png)

## Getting Started

### Prerequisites

- Node.js (version 12.16 or higher)
- Angular CLI (version 12 or higher)
- OpenAI API key

### Installation

1. Clone the repository: `git clone https://git.epam.com/akhil_kumar_singh/hackathon-codelingua.git`
2. Navigate to the project directory: `cd codelingua`
3. Install the dependencies: `npm install`
4. Create a file named `environments.ts` in the `src/environments` directory with the following contents:

    ```typescript
    export const environments = {
      production: false,
      openAIToken: 'your-openai-api-key'
    };
    ```

5. Replace `your-openai-api-key` with your OpenAI API key.
6. Start the development server: `ng serve`

## Usage

1. Select the input programming language from the dropdown menu.
2. Write or paste your code in the first editor.
3. Select the output programming language from the dropdown menu.
4. Click the "Translate" button to convert your code.
5. The translated code will appear in the second editor.
6. Click the copy icon to copy the translated code to your clipboard.

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b new-feature`
3. Make your changes and commit them: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin new-feature`
5. Create a pull request.

## License

CodeLingua App is released under the MIT License. See [LICENSE](LICENSE) for details.
