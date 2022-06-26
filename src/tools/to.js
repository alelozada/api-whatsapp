// * ---- Utilidad para el manejo de Promesas ----

const to = (promise) => {
  return promise
    .then((res) => [res, null])
    .catch((err) => [null, err])
}

exports.to = to
module.exports = { to }