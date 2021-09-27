import React from  "react" 
import {Like} from  "@styled-icons/boxicons-solid/Like"
import {ShareFill} from "@styled-icons/bootstrap/ShareFill"
import {MoreHorizontalOutline} from "@styled-icons/evaicons-outline/MoreHorizontalOutline"
import "./Cart.scss"


const Cart = ()=>{
    return(
        <div className="wrapper">
            <div className="content">
                <div className="img_block">
                    <div className="img_block__avatar"></div>
                    <div className="img_block__views">
                       <p className="img_block__views__text">
                           1237 views &#8226; 1 day ago 
                       </p>
                    </div>
                </div>
                <div className="other_block">
                    <p className="other_block__title">
                        Everything about pineapples and other tropical fruits
                    </p>
                    <p className="other_block__author">
                         Nana McDougall
                    </p>
                    <div className="other_block__progres">
                        <p className="other_block__progres__title">
                            Progres:
                          <span className="other_block__progres__percent">
                            64%
                          </span>
                        </p>
                        <div className="other_block__progres__empty">
                            <span className="other_block__progres__replete"></span>
                        </div>

                    </div>
                    <div className="other_block__icons">
                        <MoreHorizontalOutline width={24} height={24}/>
                        <div className="other_block__icons__left">
                            <Like  width={24} height={24} style={{marginRight:"30px"}}/>
                            <ShareFill  width={24} height={24}/>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}
export default Cart