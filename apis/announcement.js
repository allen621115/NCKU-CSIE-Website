const express = require( 'express' );
const router = new express.Router();
const model = require( '../models/index.js' );

// Route to /announcement/all
router.get( '/all', ( req, res ) => {
    model.Announcement.findAll( res.locals.condition )
        .then( posts => res.jsonp( {
            error:      false,
            dataNumber: posts.length,
            data:       posts,
        } ) )
        .catch( error => res.jsonp( {
            error: true,
            data:  [],
            error,
        } ) );

    /*
    Res.jsonp( announcement.findType(new Date(1997, 1, 1, 0, 0, 0),
        Date.now, 1, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14) );
     */
} );

// Route to /announcement/administrator
router.get( '/administrator', ( req, res ) => {
    model.Announcement.findAll( {
        where: { type: 1, },
    } );
} );


// Route to /announcement/activity
router.get( '/activity', ( req, res ) => {
    model.Announcement.findAll( {
        where: { type: 2, },
    } );
} );

// Route to /announcement/speech
router.get( '/speech', ( req, res ) => {
    model.Announcement.findAll( {
        where: { type: 3, },
    } );
} );

// Route to /announcement/Erecruitment
router.get( '/Erecruitment', ( req, res ) => {
    model.Announcement.findAll( {
        where: { type: 4, },
    } );
} );

// Route to /announcement/Drecruitment
router.get( '/Drecruitment', ( req, res ) => {
    model.Announcement.findAll( {
        where: { type: 5, },
    } );
} );


module.exports = router;
