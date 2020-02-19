import axios from 'axios';
const linksApiUrl = 'https://nubux-api.herokuapp.com/api/v1/links';

export default class LinkApi{
    // Create new user link
    createLink = (linkObject, userId) => {
        return axios.post(`${linksApiUrl}/createLink?uid=${userId}`, linkObject);
    }

    // Get user links by type
    getLinksByType = (linkType, userId) => {
        return axios.get(`${linksApiUrl}/getLinksByType?uid=${userId}&type=${linkType}`);
    }

    //Get user Link by id
    getLinkById = (linkId, userId) => {
        return axios.get(`${linksApiUrl}/getLinkById?id=${linkId}&uid=${userId}`);
    }

    // Edit user link by id
    updateLinkById = (linkId, userId, linkObject) => {
        return axios.put(`${linksApiUrl}/updateLinkById?uid=${userId}&id=${linkId}`, linkObject);
    }

    // Delete
    deleteLinkById = (linkId, userId) => {
        return axios.delete(`${linksApiUrl}/deleteLinkById?uid=${userId}&id=${linkId}`);
    }
}



