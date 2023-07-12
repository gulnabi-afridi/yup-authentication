import type { NextApiRequest, NextApiResponse } from 'next'

import { runGptPrompt } from './utils/get-text-blocks'

type Data = {
    name: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    const { blockTotal, partialResult, topic } = req.body

    try {
        const gptResponse = await getTextBlocks({
            blockTotal,
            topic,
            partialResult
        })

        // @ts-ignore
        res.status(200).json({ result: gptResponse })
    } catch(error) {
        // @ts-ignore
        res.status(500).json({ error: error.message })
    }
}
