import angle from '../assets/angle_up.png'

export const Conocimientos = () => {
  return (
    <>
      <a name="knowledge"></a>
      <div className='conocimientos_container'>
        <div className='section_title_angle'>
          <p className='section_title'>Conocimientos</p>
          <a href="#header">
            <img className='img_angle' src={angle} alt="" />
          </a>
        </div>
        <div className='conocimientos_div'>
          <div>JAVASCRIPT</div>
          <div>HTML</div>
          <div>CSS</div>
          <div>REACT JS</div>
          <div>NODE JS</div>
          <div>GIT</div>
          <div>AWS</div>
          <div>NEST JS</div>
          <div>REST API</div>
          <div>GRAPHQL</div>
          <div>GO</div>
        </div>
      </div>
    </>
  )
}
