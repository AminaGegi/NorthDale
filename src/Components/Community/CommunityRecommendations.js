import React from "react";
import {Container} from "react-bootstrap";
import "../../style/user/Main/Recommendations.scss"


export default function Recommendations (){
    return (<div className='recommendations'>
            <Container>
                <div className='flex justify-content-start py-2'>
                    <div>
                        <img alt='avatar' src='images/community/seo.svg' className='pr-4'/>
                    </div>
                    <div>
                        <div>SEO-тусовка</div>
                        <div className='text-textGrey'>1435 подписчиков</div>
                        <div style={{cursor: "pointer"}}>Подписаться</div>
                    </div>
                </div>
                <div className='flex justify-content-start py-2'>
                    <div>
                        <img alt='avatar' src='images/community/moushen.svg' className='pr-4'/>
                    </div>
                    <div>
                        <div>Моушн-дизайн</div>
                        <div className='text-textGrey'>1435 подписчиков</div>
                        <div style={{cursor: "pointer"}}>Подписаться</div>
                    </div>
                </div>
                <div className='flex justify-content-start py-2'>
                    <div>
                        <img alt='avatar' src='images/community/loft.svg' className='pr-4'/>
                    </div>
                    <div>
                        <div>LoftBlog</div>
                        <div className='text-textGrey'>1435 подписчиков</div>
                        <div style={{cursor: "pointer"}}>Подписаться</div>
                    </div>
                </div>
                <div className='flex justify-content-start py-2'>
                    <div>
                        <img alt='avatar' src='images/community/smm.svg' className='pr-4'/>
                    </div>
                    <div>
                        <div>Монстры SMM</div>
                        <div className='text-textGrey'>1435 подписчиков</div>
                        <div style={{cursor: "pointer"}}>Подписаться</div>
                    </div>
                </div>
            </Container>
        </div>
    )
}