'use strict'

const apollo11 = new Date('1969-07-20T20:17:40Z')
const maintenant = new Date()
const MONTHS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']

function show (description, result) {
    document.writeln('<tr><td>' + description + '</td><td>' + result + '</td></tr>')
}

show(
    'La date du jour, traduit en chaîne automatiquement',
    maintenant
)
show(
    'Nombre de ms écoulées depuis le 01/01/1970 à 00:00:00',
    maintenant.getTime()
)

show(
    'Le nom du mois courant',
    MONTHS[maintenant.getMonth()]
)

show(
    'Localization en Arabe de la date du jour',
    maintenant.toLocaleString('ar', { timeZone: 'UTC' })
)

show(
    'Décalage de la date du jour en minutes avec UTC',
    maintenant.getUTCMinutes()
)

show(
    "Mission Apollo11 : Date d'atterrissage sur la Lune 20 juillet 1969 à 20 h 17 min 40 s UTC",
    apollo11
)
