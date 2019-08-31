(defun permute (seq)
    (if (null seq) '(())
       (let ((subsq (permute (cdr seq)))) 
       (append subsq (mapcar (lambda (s) (cons (car seq) s)) subsq)))))

(defun minMax (seqs &optional min)
    (if (null seqs) min
    (let ((diff (- (apply #'max (car seqs)) (apply #'min (car seqs)))))
        (if (or (null min) (< diff min)) (minMax (cdr seqs) diff) (minMax (cdr seqs) min)))))

(defun findMinMax (seq n)
    (minMax (remove-if-not (lambda (s) (= (length s) n)) (permute seq))))

(print (findMinMax '(10 100 300 200 1000 20 30) 3))
(print (findMinMax '(1 2 3 4 10 20 30 40 100 200) 4))
(print (findMinMax '(1 2 1 2 1) 2))