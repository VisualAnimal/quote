import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { List, Cell } from 'react-vant'
import styled from 'styled-components'

const Wrap = styled.span`
  display: flex;
  /* width:100%; */
  font-size: 12px;
  .name{
    width:25%;
    white-space: nowrap; /* 禁止文本换行 */
    overflow: hidden; /* 隐藏超出容器的内容 */
    text-overflow: ellipsis; /* 在文本溢出时显示省略号 */
    /* border-right:1px solid black; */
    /* background: red; */
  }
  .version{
    width: 8%;
    opacity:0.5;
    /* background: #4a4141; */
    
  }
  .color{
    width: 8%;
  }
  .capacity{
    width: 10%;
    white-space: nowrap; /* 禁止文本换行 */
    overflow: hidden; /* 隐藏超出容器的内容 */
    text-overflow: ellipsis; /* 在文本溢出时显示省略号 */
  }
  .price{
    width:13%;
    font-weight: bold;
    opacity:0.8;
    white-space: nowrap; /* 禁止文本换行 */
    overflow: hidden; /* 隐藏超出容器的内容 */
    text-overflow: ellipsis; /* 在文本溢出时显示省略号 */
  }
  .describe{
    opacity:0.5;
    width:41%;
    white-space: nowrap; /* 禁止文本换行 */
    overflow: hidden; /* 隐藏超出容器的内容 */
    text-overflow: ellipsis; /* 在文本溢出时显示省略号 */
  }
`

function QuoteList() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    async function fetchQuotes() {
      try {
        const response = await axios.get('http://chai.nfiii.cn:5555/quote');
        setQuotes(response.data);
      } catch (error) {
        console.error('Error fetching quotes:', error);
      }
    }

    fetchQuotes();
  }, []);

  return (
    <>
      <List>{
        quotes.map(quote => (
          <Cell><Wrap>
            <span className='name'>{quote.productName}</span>
            <span className='version'>{quote.version}</span>
            <span className='capacity'>{quote.capacity}</span>
            <span className='color'>{quote.color}</span>
            <span className='price'>{`￥`}{quote.price}</span>
            <span className='describe'>{quote.description}</span>
          </Wrap></Cell>
        ))
      }
      </List>
    </>
    // <div>
    //   <h2>Quote List</h2>
    //   <table>
    //     <thead>
    //       <tr>
    //         <th>Product Name</th>
    //         <th>Version</th>
    //         <th>Capacity</th>
    //         <th>Color</th>
    //         <th>Price</th>
    //         <th>Description</th>
    //         <th>Product Number</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {quotes.map(quote => (
    //         <tr key={quote._id}>
    //           <td>{quote.productName}</td>
    //           <td>{quote.version}</td>
    //           <td>{quote.capacity}</td>
    //           <td>{quote.color}</td>
    //           <td>{quote.price}</td>
    //           <td>{quote.description}</td>
    //           <td>{quote.productNumber}</td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
  );
}

export default QuoteList;
