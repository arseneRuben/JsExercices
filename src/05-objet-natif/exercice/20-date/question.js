/**
 * Exercice - date
 *
 * Consignes:
 *  Créer le fichier js/date.js à partir du code suivant.
 *  Compléter le code manquant pour obtenir le résultat de la maquette en remplaçant les 'TODO' par le code nécessaire.
 */
'use strict'

// Référence ISO
// http://www.lingoes.net/en/translator/langcode.htm

const apollo11 = new Date('1969-07-20T20:17:40Z')
const maintenant = new Date()
const MONTHS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']

function show (description, result) {
    document.writeln('<tr><td>' + description + '</td><td>' + result + '</td></tr>')
}

show(
    'La date du jour, traduit en chaîne automatiquement',
    'TODO'
)
show(
    'Nombre de ms écoulées depuis le 01/01/1970 à 00:00:00',
    'TODO'
)

show(
    'Le nom du mois courant',
    'TODO'
)

show(
    'Localization en Arabe de la date du jour',
    'TODO'
)

show(
    'Décalage de la date du jour en minutes avec UTC',
    'TODO'
)

show(
    "Mission Apollo11 : Date d'atterrissage sur la Lune 20 juillet 1969 à 20 h 17 min 40 s UTC",
    'TODO'
)
