// eslint-disable-next-line no-unused-vars
const Transfert = (function () {
    'use strict'

    function switchFromUserToGroupHandler (event, components) {
        components.userList.removeChild(event.target)
        components.groupList.appendChild(event.target)
    }

    function switchFromGroupToUserHandler (event, components) {
        components.groupList.removeChild(event.target)
        components.userList.appendChild(event.target)
    }

    /**
     * Initializes user-list in the left side and adds event'listener on
     * @param {*} param
     */
    function initUserList (param) {
        const userList = document.getElementById(param.userListId)
        const groupList = document.getElementById(param.groupListId)
        param.users.forEach(user => {
            const liElmt = document.createElement('li')
            liElmt.innerHTML = user.firstName + ' ' + user.lastName
            userList.append(liElmt)
        })

        userList.addEventListener('click', function (event) {
            switchFromUserToGroupHandler(event, { userList, groupList })
        })
    }

    /**
     * Adds event'listener on group-list
     * @param {*} param
     */

    function initGroupList (param) {
        const userList = document.getElementById(param.userListId)
        const groupList = document.getElementById(param.groupListId)
        groupList.addEventListener('click', function (event) {
            switchFromGroupToUserHandler(event, { userList, groupList })
        })
    }

    return {
        init: function (param) {
            initUserList(param)
            initGroupList(param)
        }
    }
})()
