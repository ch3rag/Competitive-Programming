;https://www.codechef.com/problems/XORAGN

(defparameter testCases (read))
(defparameter N NIL)
(defparameter *array* '())
(defparameter results '())

(defun solve() 
(dotimes (x testCases)
	(setf N (read))
	(setq result 0)
	(dotimes (i N)
		(setf *array* (cons (read) *array*)))
	(dolist (a *array*)
		(dolist (b *array*)
			(setf result (logxor result (+ a b)))))
	(setf *array* '())
	(format t "~a~%" result)
	(setf results 0))
	(return-from solve 0))

(solve)

