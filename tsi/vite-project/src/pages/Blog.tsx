import React, { PureComponent, ReactNode } from 'react'

interface Props {}
interface State {}

class Blog extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            
        }
    }

    render(): ReactNode {
        return (
            <div>Super Interesting InfARTuration</div>
        )
    }
}

export default Blog
