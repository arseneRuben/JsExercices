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

    /**
     * Adds event'listener on group-list
     * @param {*} param
     */

    function initTitles (param) {
        const userList = document.getElementById(param.userListId)
        const groupList = document.getElementById(param.groupListId)

        const h2UserList = document.createElement('h2')
        h2UserList.appendChild(document.createTextNode(param.userListTitle))

        const h2GroupList = document.createElement('h2')
        h2GroupList.appendChild(document.createTextNode(param.groupListTitle))

        const sections = document.getElementsByTagName('section')
        sections[0].insertBefore(h2UserList, userList)
        sections[1].insertBefore(h2GroupList, groupList)
    }

    return {
        init: function (param) {
            initTitles(param)
            initUserList(param)
            initGroupList(param)
        }
    }
})()
