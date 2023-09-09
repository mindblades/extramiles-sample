'use client';
import Image from 'next/image'
import {useState} from "react";
import axios from "axios";

export default function Home() {
    const [price, setPrice] = useState('');
    const [discount, setDiscount] = useState('');
    const [after, setAfter] = useState('');
    const [saved, setSaved] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const resetValue = () => {
        // 👇️ clear input value
        setPrice('');
        setDiscount('');
        setAfter('');
        setSaved('');
    };
    const  handleSubmit=()=>{
        let data = {
            price,
            discount,
        }
        axios.post('http://localhost:3000/percentage-calc/',data).then((res)=>{

            console.log(res.data.newCacl);
            setSubmitted(true)
            setPrice(res.data.newCacl.price);
            setDiscount(res.data.newCacl.discount);
            setAfter(res.data.newCacl.discountedPrice);
            setSaved(res.data.newCacl.saving);
        })
    }

    return (
        <main className={`container-lg pt-3`}>
            <div className={`row`}>
                <div className={`col-md-7`}>
                    {/*Info*/}
                    <h2 className={`h2`}>Discount Calculator</h2>
                    <p className={`p mb-0`}>Please provide any 2 values below to calculate</p>
                    <Image src={`/images/insm.svg`}
                           alt={`Modify the values`}
                           width={0}
                           height={0}
                           style={{ width: '100%', height: 'auto' }} // optional
                    />
                    {/*Calculator*/}
                    <div className={`mt-1`}>
                        <form action="/" method="post">
                            {/*Percentage*/}
                            <table className={`panel`}>
                                <tbody>
                                <tr>
                                    <td className={`p-1`}>Price before discount</td>
                                    <td className={`p-1`}>
                                        <input type="text" name="price" id="before-discount"
                                               value={price} onChange={(e)=>{setPrice(e.target.value)}}
                                               className="input in-half in-dollar" />
                                    </td>
                                </tr>
                                <tr>
                                    <td className={`p-1`}>Discount</td>
                                    <td className={`p-1`}>
                                        <input type="text" name="discount" id="discount"
                                               value={discount} onChange={(e)=>{setDiscount(e.target.value)}}
                                               className="input in-half in-percentage" />
                                    </td>
                                </tr>
                                <tr>
                                    <td className={`p-1`}>Price after discount</td>
                                    <td className={`p-1`}>
                                        <input type="text" name="price_after" id="after-discount" disabled
                                               value={after} onChange={(e)=>{setAfter(e.target.value)}}
                                               className="input in-half in-dollar" />
                                    </td>
                                </tr>
                                <tr>
                                    <td className={`p-1`}>You saved</td>
                                    <td className={`p-1`}>
                                        <input type="text" name="saved" id="you-saved" disabled
                                               value={saved} onChange={(e)=>{setSaved(e.target.value)}}
                                               className="input in-half in-dollar" />
                                    </td>
                                </tr>
                                <tr>
                                    <td align={`center`} colSpan={2} className={`pb-2`}>
                                        <input type="submit" value={`Calculate`} className={`calculate`} onClick={handleSubmit}/>
                                        <input type="button" value={`Clear`} className={`clear ms-1`} onClick={resetValue}/>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}
