'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    find: ctx => {
        console.log(ctx.query)
        return strapi.query('campaign').find(ctx.query, ['posts', 'posts.owner', 'posts.tags', 'posts.medias', 'posts.products']);
      },
};
