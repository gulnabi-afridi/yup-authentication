// [API REQUEST SPECIFICATION]
// - imageId will depend on the dropdown "pick character"
// - prompt will be = text block for "create" (the first time the corresponding text block is created),
// ... or a string (in the "change this image" input) when the user clicks the image to change it
type GetImageByTextBlock = {
    imageId: string,
    prompt: string,
    type: 'create' | 'edit'
}

export const getImageByTextBlock = async ({ imageId, prompt, type }: GetImageByTextBlock) => {
    // [API RESPONSE SPECIFICATION]
    // Will return an image with mime type image/* (status 200) or error (500)

    // @TODO
    // First Implement https://github.com/brycedrennan/imaginAIry (img2img) in Flask
    // For basic Flask set up see example.py
    // + [unless Flask restarts itself] ? & [prod] auto-restart: https://towardsdatascience.com/automate-your-python-script-with-pm2-463238ea0b65)
    // Finally: Use router rewrites in nextjs https://github.com/vercel/next.js/discussions/15846#discussioncomment-46548

    return {}
}
