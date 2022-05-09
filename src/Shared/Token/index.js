export const TokenGenerator = (res) => {
    let timing = (res.tokenObj.expires_in || 3600 -5 * 60) * 1000;
    const createToken = async () => {
        const newAuthRes = await res.reloadAuthResponse();
        timing = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
        console.log('newAuthRes:', newAuthRes)
        console.log(' new auth token:', newAuthRes.id_token)

        setTimeout(createToken, timing)
    }
    setTimeout(createToken, timing)
}