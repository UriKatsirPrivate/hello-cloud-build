/* HTTP Cloud Function.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
exports.helloCloudBuild = (req, res) => {
  let message = req.query.message || req.body.message || 'This is a Demo index file';
  res.status(200).send(message);
};