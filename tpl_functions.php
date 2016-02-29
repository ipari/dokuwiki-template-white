<?php
/**
 * Template Functions
 *
 * This file provides template specific custom functions that are
 * not provided by the DokuWiki core.
 * It is common practice to start each function with an underscore
 * to make sure it won't interfere with future core functions.
 */

// must be run from within DokuWiki
if (!defined('DOKU_INC')) die();

/**
 * copied to core (available since Detritus)
 */
function white_toolsevent($toolsname, $items, $view='main') {
    $data = array(
        'view'  => $view,
        'items' => $items
    );

    $hook = 'TEMPLATE_'.strtoupper($toolsname).'_DISPLAY';
    $evt = new Doku_Event($hook, $data);
    if($evt->advise_before()){
        $actions = array('export_pdf');
        foreach($evt->data['items'] as $k => $html) {
            if (in_array($k, $actions)) {
                $html = str_replace(' '.$k, ' plugin_'.$k, $html);
            }
            echo $html;
        }
    }
    $evt->advise_after();
}

function white_breadcrumbs() {
    global $lang;
    global $conf;

    //check if enabled
    if(!$conf['breadcrumbs']) return false;

    $crumbs = breadcrumbs(); //setup crumb trace

    $crumbs_sep = ' <span class="bcsep">'.$sep.'</span> ';

    //render crumbs, highlight the last one
    print '<h3>'.$lang['breadcrumb'].'</h3>';
    $last = count($crumbs);
    $i    = 0;
    print '<ul>';
    foreach($crumbs as $id => $name) {
        $i++;
        print '<li>';
        if($i == $last) print '<span class="curid">';
        tpl_link(wl($id), hsc($name), 'class="breadcrumbs" title="'.$id.'"');
        if($i == $last) print '</span>';
        print '</li>';
    }
    print '</ul>';
    return true;
}

function white_pageinfo($ret = false) {
    global $conf;
    global $lang;
    global $INFO;
    global $ID;

    // return if we are not allowed to view the page
    if(!auth_quickaclcheck($ID)) {
        return false;
    }
    $date = dformat($INFO['lastmod']);

    // print it
    if($INFO['exists']) {
        $out = '';
        $out .= $lang['lastmod'];
        $out .= ' ';
        $out .= $date;
        if($ret) {
            return $out;
        } else {
            echo $out;
            return true;
        }
    }
    return false;
}
