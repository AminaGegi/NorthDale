import React from "react";

export default function Open (props){

    return(<>
            <div>
                <div className='flex justify-between align-content-center border-bottom-9 border-borderGrey'>
                    <div>
                        <button className='bg-transparent text-grey-400 flex align-items-center' onClick={props.click}>
                            <svg className="h-4 w-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M15 19l-7-7 7-7"/>
                            </svg>
                            Назад</button>
                    </div>
                    <div>Единомышленница</div>
                    <div>
                        <img alt='partner avatar' src='images/message/partner_four.svg'/>
                    </div>
                </div>
                <div className='flex align-content-start p-2'>
                    <div>
                        {/*<img alt='partner avatar' src='images/message/partner_four.svg'/>*/}
                    </div>
                    <div className='flex-column align-content-center p-2'>
                        <div className='flex ml-2 lg:w-2/4 w-100 justify-content-between'>
                            <span>Единомышленница</span>
                            <span className='text-textGrey'> 22 янв 2022</span>
                        </div>
                        <div className='mb-5 mt-3'>
                            В частности, высококачественный прототип будущего проекта создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса вывода текущих активов. Вот вам яркий пример современных тенденций - убеждённость некоторых оппонентов способствует подготовке и реализации позиций, занимаемых участниками в отношении поставленных задач. Но экономическая повестка сегодняшнего дня, в своём классическом представлении, допускает внедрение экспериментов, поражающих по своей масштабности.
                        </div>
                    </div>
                </div>
                <div className='flex align-content-start p-2'>
                    <div>
                        {/*<img alt='partner avatar' src='images/message/partner_four.svg'/>*/}
                    </div>
                    <div className='flex-column align-content-center p-2'>
                        <div className='flex ml-2 w-2/4 justify-content-between'>
                            <span>Единомышленница</span>
                            <span className='text-textGrey'> 22 янв 2022</span>
                        </div>
                        <div className='mb-5 mt-3'>
                            В частности, высококачественный прототип будущего проекта создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса вывода текущих активов. Вот вам яркий пример современных тенденций - убеждённость некоторых оппонентов способствует подготовке и реализации позиций, занимаемых участниками в отношении поставленных задач. Но экономическая повестка сегодняшнего дня, в своём классическом представлении, допускает внедрение экспериментов, поражающих по своей масштабности.
                        </div>
                        <input type='text' placeholder='Напишите...' className='prof__search'/>
                    </div>
                </div>
            </div>
        </>
    )
}