package org.example.server.repositories;

import org.example.server.Entities.Book;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;

@Repository
public interface BookRepository  extends CrudRepository<Book, Long> {
    Book findById(long id);
}
