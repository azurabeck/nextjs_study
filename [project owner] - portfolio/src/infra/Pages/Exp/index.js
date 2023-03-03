import React , {useState} from 'react'
import Locale from './_locale'
import { Bullet, TitleWrapper , Text } from './_style'
import { ContentWrapper } from '../../../assets/_style'
import { useRouter } from "next/router";

export const Exp = () => {  
    
    const [ area , setArea ] = useState({start: 0, next: 1})
    const { locale } = useRouter();
    const LocaleText = Locale[locale]

    return (
      <ContentWrapper>

      { LocaleText.slice(area.start , area.next).map((exp , i) => {
        return (
          <div key={i}>
              <TitleWrapper>
                  <h2 className='title'>{exp.area}</h2>
                  <h2 className='period'>{exp.period}</h2>
              </TitleWrapper>
              <Text dangerouslySetInnerHTML={{ __html: exp.text }} />
          </div>
        )
      }) }

      <Bullet>
        {
          LocaleText.map((bullet, i) => (
            <li key={i} className={i === area.start ? 'active' : null} onClick={() => setArea({start: bullet.key, next: bullet.key + 1})} />
          ))
        }
      </Bullet>
        
      </ContentWrapper>
    )
 }


export default Exp
