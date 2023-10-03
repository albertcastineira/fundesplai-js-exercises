interface Joke {
    value: string
}

const jokeText = document.querySelector("#phraseText") as HTMLParagraphElement;
const apiUrl: string = "https://api.chucknorris.io/jokes/random";

async function getJoke(): Promise<Joke> {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const data: Joke = await response.json();
      return data;
    } catch (error) {
      throw new Error(`API request failed: ${error.message}`);
    }
}

async function updateJoke(): Promise<any> {
    const joke = await getJoke();
    jokeText.innerText = joke.value;
}