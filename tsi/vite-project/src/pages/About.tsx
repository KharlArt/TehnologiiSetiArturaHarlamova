import React, { PureComponent, ReactNode } from 'react'

interface Props {}
interface State {}

class About extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            
        }
    }

    render(): ReactNode {
        return (
            <div>About</div>
        )
    }
}

export default About
