import styles from './button.module.css'
import Link from 'next/link'

export default function Button({url,query,text,className,external}) {
    return (
      !external ?
    <Link  href={{ pathname: url,query:{data:encodeURIComponent(JSON.stringify(query))} }}>
        <button style={{backgroundColor: String(className).indexOf('btn-') == -1 && '#26AB9D' }} type='button' role={"button"} className={`btn btn-sm ${styles.see_more_btn} ${className}`}>{text}</button>
    </Link> :
    <a target={"_blank"} rel="noreferrer" href={url}>
        <button style={{backgroundColor: String(className).indexOf('btn-') == -1 && '#26AB9D' }} type='button' role={"button"} className={`btn btn-sm ${styles.see_more_btn} ${className}`}>{text}</button>
    </a>
  )
}
