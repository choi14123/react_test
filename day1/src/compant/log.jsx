function logsLender(str, i) {
  return i % 2 === 0 && <p key={i + " " + str}>{str}</p>
}

export default logsLender;