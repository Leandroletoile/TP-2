const notFound = (_, _, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    return next(err); 
  }

const errorHandler = {
    notFound
}
