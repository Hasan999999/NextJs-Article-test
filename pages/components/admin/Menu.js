import React from 'react';
import Link from 'next/link'
const Menu = () => {
    return (
        <div>
                        <Link href="/admin"><button type="button" className="btn btn-primary btn-lg btn-block">AddGroup</button></Link>
                        <Link href="/editdeletegroup"><button type="button" className="btn btn-secondary btn-lg btn-block">EditDelete</button></Link>
                        <Link href="/addarticle"><button type="button" className="btn btn-primary btn-lg btn-block">AddArticle</button></Link>
                        <Link href="/editdeletearticle"><button type="button" className="btn btn-secondary btn-lg btn-block">EditDelete</button></Link>
        </div>
    );
}

export default Menu;
