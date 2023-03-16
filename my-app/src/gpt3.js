import axios from 'axios';

export const apiKey = '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';

export const getGeneratedTitle = async () => {
  try {
    const prompt = 'say something';

    const response = await axios.post(
      'https://api.openai.com/v1/engines/davinci-codex/completions',
      {
        prompt,
        max_tokens: 15,
        n: 1,
        stop: null,
        temperature: 0.6,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    console.log('Response from ChatGPT:', response.data);

    const title = response.data.choices[0].text.trim();
    return title;
  } catch (error) {
    console.error('Error generating title:', error);
    return "Welcome to Delia's Portfolio";
  }
};
