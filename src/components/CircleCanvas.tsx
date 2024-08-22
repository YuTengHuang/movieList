import React, { useRef, useEffect } from 'react'
import { CircleCanvasProps } from '../types/types'

const CircleCanvas: React.FC<CircleCanvasProps> = ({ percent, radius, strokeWidth }) => {

  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const getColorAndBackground = () => {
      if (percent >= 70) {
        return { 
          color: '#21d07a',
          background: '#204529' 
        }
      } else if (percent >= 40) {
        return { 
          color: '#d2d531', 
          background: '#423d0f' 
        }
      } else {
        return { 
          color: '#db2360', 
          background: '#571435' 
        }
      }
    }

    const { color, background } = getColorAndBackground()

    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const radiusAdjusted = radius - strokeWidth / 2
    
    canvas.width = radius * 2
    canvas.height = radius * 2

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    // 圓圈背景
    ctx.beginPath()
    ctx.arc(centerX, centerY, radiusAdjusted, 0, 2 * Math.PI)
    ctx.fillStyle = background
    ctx.lineWidth = strokeWidth
    ctx.fill()

    // 圓圈
    const endAngle = (percent / 100) * 2 * Math.PI
    ctx.beginPath()
    ctx.arc(centerX, centerY, radiusAdjusted - 5, -Math.PI / 2, endAngle - Math.PI / 2)
    ctx.strokeStyle = color
    ctx.lineWidth = strokeWidth
    /**
     * lineCap = "???"
     * butt 預設值，平面線頭
     
      * (以下皆會多一點長度)
      * round 圓角，但是線頭的圓其實是以"線寬(lineWidth)"的一半!做為半徑 的半圓在線頭

      * square 平面線頭，但是線頭其實是以"線寬(lineWidth)"的一半! 做為高度，寬度同"線寬"的方形在線頭
    */
    ctx.lineCap = 'round'
    ctx.stroke()

  }, [percent, radius, strokeWidth])

  return (
    <canvas
      ref={canvasRef}
      width={radius * 2}
      height={radius * 2}
      style={{position: 'absolute'}}
    />
  )
}

export default CircleCanvas;
