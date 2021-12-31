import React from 'react'
import consta from '../../../../dummyData'
import ind from '../../../../index.css'
import Topic from './Topic/Topic'
import cs from './Topics.css'

const Topics = () => {

    const topics = consta.topics.map((topic) => 
        <Topic 
            key={topic.id}
            title={topic.title}
            activity={topic.activity}
            description={topic.description}/>
    )

    return (
        <section className={cs.Topics}>
            <div className={ind.container}>
                <h2 className={ind.h2}>Topics</h2>
                <div className={cs.topics}>
                    {topics}
                </div>
            </div>
        </section>
    )
}

export default Topics
