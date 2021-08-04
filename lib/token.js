
export default function get_auth_token(clientId, apiKey) {
    if (clientId === null || apiKey === null) {
        throw 'clientId and/or apiKey not set'
    }
    var token = Buffer.from(clientId + ':' + apiKey).toString('base64')
    return token
}


