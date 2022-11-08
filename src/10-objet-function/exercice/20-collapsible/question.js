'use strict'

/**
 * Crée une composante réutilisable qui reconnaît la structure HTML suivante pour afficher ou cacher le contenu en cliquant sur l'entête.
 * Un seul paramètre qui est le nom de la classe collapsible est passé au module pour lui indiquer quelles balises doivent être utilisées.
 *
 * <div class="collapsible">
 *      <hx></hx>
 *      <div></div>
 * </div>
 *
 * Compléter le code manquant pour obtenir le même résultat que les maquettes.
 *
 * Consignes:
 *  - Ne pas éditer le HTML
 *  - La méthode init() prend en paramètre un objet ayant une propriété className
 *  - Ajouter la classe CSS collapsible-h sur chacun des entêtes (balise h2 dans cet exemple)
 *  - Ajouter la classe CSS collapsible-open ou collapsible-close sur chaque entête lors de l'ouverture ou fermeture
 *  - Ajouter la classe CSS collapsible-div sur chacun des div qui encapsule le contenu (le div à l'intérieur du div class="collapsible")
 *  - Contrôler l'ouverture ou la fermeture en spécifiant la propriété CSS display: block ou none
 */
