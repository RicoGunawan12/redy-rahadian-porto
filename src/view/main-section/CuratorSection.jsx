import React from 'react'
import Curator1 from '../../assets/curator1.jpeg';
import Curator2 from '../../assets/curator2.jpeg';
import Curator3 from '../../assets/curator3.jpeg';

function CuratorSection() {
    const truncateMultilineStyle = {
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      };
  return (
    <div className='w-[100vw] h-[110vh] pt-[150px]'>
        <div>
            <div className='text-center font-bold text-[72px]'>CURATORS</div>
            <div className='text-center text-[#9CA3AF]'>What the curators said about Redy Rahadian</div>
        </div>

        <div className='flex justify-center mt-10'>
            
            <div className='w-[25.5vw] min-h-[50vh] border-[#D9D9D9] border-1 mx-4'>

                <div className='flex justify-center mt-6'><img className='w-[40%] h-[25vh] object-cover object-center' src={Curator1} /></div>
                <div>
                    <div className='text-center font-bold text-[24px] mt-3'>ENIN SUPRIYANTO</div>
                    <div className='text-center font-semibold'>Art Curator & Art Director of Art Jakarta</div>
                </div>
                <div className='text-center text-[#666666] mt-2 mx-[12px] mb-4' style={truncateMultilineStyle}>“Like Picasso, Redy Rahadian also falls in love with iron and steel. Amidst the ease of modern material technology, which allows artists to create sculptures or various other three dimensional forms using easily shaped, Redy Rahadian chooses a more challenging path. He is one of the contemporary Indonesian sculptors who persistently grapples almost in a literal sense with iron and steel.”</div>
            </div>


            <div className='w-[25.5vw] min-h-[50vh] border-[#D9D9D9] border-1 mx-4'>

                <div className='flex justify-center mt-6'><img className='w-[40%] h-[25vh] object-cover object-center' src={Curator2} /></div>
                <div>
                    <div className='text-center font-bold text-[24px] mt-3'>ENIN SUPRIYANTO</div>
                    <div className='text-center font-semibold'>Art Curator & Art Director of Art Jakarta</div>
                </div>
                <div className='text-center text-[#666666] mt-2 mx-[12px] mb-4' style={truncateMultilineStyle}>“Like Picasso, Redy Rahadian also falls in love with iron and steel. Amidst the ease of modern material technology, which allows artists to create sculptures or various other three dimensional forms using easily shaped, Redy Rahadian chooses a more challenging path. He is one of the contemporary Indonesian sculptors who persistently grapples almost in a literal sense with iron and steel.”</div>
            </div>
            
            
            <div className='w-[25.5vw] min-h-[50vh] border-[#D9D9D9] border-1 mx-4'>

                <div className='flex justify-center mt-6'><img className='w-[40%] h-[25vh] object-cover object-center' src={Curator3} /></div>
                <div>
                    <div className='text-center font-bold text-[24px] mt-3'>ENIN SUPRIYANTO</div>
                    <div className='text-center font-semibold'>Art Curator & Art Director of Art Jakarta</div>
                </div>
                <div className='text-center text-[#666666] mt-2 mx-[12px] mb-4' style={truncateMultilineStyle}>“Like Picasso, Redy Rahadian also falls in love with iron and steel. Amidst the ease of modern material technology, which allows artists to create sculptures or various other three dimensional forms using easily shaped, Redy Rahadian chooses a more challenging path. He is one of the contemporary Indonesian sculptors who persistently grapples almost in a literal sense with iron and steel.”</div>
            </div>

        </div>
    </div>
  )
}

export default CuratorSection