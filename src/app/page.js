"use client"
import styles from './page.module.css'
import App from "./App"
import Instagram from "./Instagram"
import {
  Root,
} from "./Contexts"

export default function Home() {
  return (
    <Root>
      <Instagram />
    </Root>
  )
}
