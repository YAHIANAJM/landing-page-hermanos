import { ComponentPropsWithoutRef, ElementType, ReactNode, Ref, RefObject } from 'react'
import styles from './Reveal.module.css'
import { useReveal } from '@/hooks/useReveal'

interface RevealOwnProps {
  children: ReactNode
  as?: ElementType
  delay?: number
  className?: string
  /* Merge in a second ref (e.g. from a hook like useCountUp that also observes this node) */
  innerRef?: RefObject<HTMLElement>
}

type RevealProps = RevealOwnProps & Omit<ComponentPropsWithoutRef<'div'>, keyof RevealOwnProps>

export default function Reveal({
  children,
  as: Tag = 'div',
  delay = 0,
  className = '',
  innerRef,
  ...rest
}: RevealProps) {
  const { ref, visible } = useReveal<HTMLElement>()

  const setRefs: Ref<HTMLElement> = (node) => {
    ;(ref as { current: HTMLElement | null }).current = node
    if (innerRef) (innerRef as { current: HTMLElement | null }).current = node
  }

  return (
    <Tag
      ref={setRefs}
      className={`${styles.reveal} ${visible ? styles.visible : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
