import { Configuration, OpenAIApi } from 'openai'

const config = new Configuration({
	apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(config)

// [API REQUEST SPECIFICATION]
// topic will be be defined for the first text block
// textSoFar will be null for the first text block, and will include all subsequent text blocks for the 2nd+ block (3-5 in total)
// blockTotal will be determined by the dropdown (first option -> 3, second option -> 4s, last option -> 5)
type GetTextBlocksArgs = {
    blockTotal: number
    topic?: string,
    partialResult?: string | null
}

export const getTextBlocks = async ({ blockTotal = 3, topic, partialResult }: GetTextBlocksArgs) => {
    // [API RESPONSE SPECIFICATION]
    // In the final version runGptPrompt this will be an array of text blocks, each with a unique ID [ in this example the ids are: "intro", "body", "Conclusion" ]. The amount of text blocks will range from 3 to 5.
    // Example of response.data.choices[0].text (use `return { mock data with this format } at the top of this method reflecting this format to test the frontend)
    // [
    //  { id: "intro", value: "INTRO TEXT (this is one text block)" },
    //  { id: "body", value: "INTRO TEXT (this is one text block)" },
    //  { id: "conclusion", value: "INTRO TEXT (this is one text block)" }
    // ]

	const prompt = `
        write a short story for children about ${ topic }.

        The story should be separate in intro, body and conclusion - each with a detailed image description.

        Write a as single long string, without new line characters. The result should be parseable JSON
    `

    console.log('API call: start', prompt)

    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            max_tokens: 2048,
            temperature: 1, // @TODO see if with temperature = 1 (less creativity) the format is returned correctly
        })

        console.log('API call: end [Raw]', response.data.choices[0].text)

        const parsedResponse = JSON.parse(response.data.choices[0].text as string)
        console.log('API call: end [Parsed]', parsedResponse)

        return parsedResponse
    } catch(e) {
        console.log('API call: error', e)
    }
};
