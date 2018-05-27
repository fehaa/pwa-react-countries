import React from 'react';

function Country(props) {
    return (
        <div className='card'>
            <div className='card-content'>
                <div className='media'>
                    <div className='media-left'>
                        <figure className='image is-48x48'>
                            <img src={props.country.flag} alt={props.country.name} />
                        </figure>
                    </div>
                    <div className='media-content'>
                        <p className='title is-4'>{props.country.name}</p>
                        <p className='subtitle is-6'>{props.country.capital}</p>
                    </div>
                </div>
                <div className='content'>
                    {props.country.region}
                </div>
            </div>
        </div>
    );
}

export default Country;